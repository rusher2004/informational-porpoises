export const do_thing = () => {
  console.log('hello')
}

export const get_display_name = (item) => {
  let classes = item.names.map(name => name.class)

  // Set display name for showing on card titles, scientific name preferred
  if (classes.includes('scientific_name')) {
    item.display_name = item.names.find(name => name.class === 'scientific_name').name
  } else if (classes.includes('synonym')) {
    item.display_name = item.names.find(name => name.class === 'synonym').name
  } else if (classes.includes('genbank_common_name')) {
    item.display_name = item.names.find(name => name.class === 'genbank_common_name').name
  } else if (classes.includes('common_name')) {
    item.display_name = item.names.find(name => name.class === 'common_name').name
  } else if (classes.includes('blast_name')) {
    item.display_name = item.names.find(name => name.class === 'blast_name').name
  } else {
    item.display_name = 'name unkown'
  }

  // Set a friendlier name for showing on its own page, common name preferred
  if (classes.includes('genbank_common_name')) {
    item.common_name = item.names.find(name => name.class === 'genbank_common_name').name
  } else if (classes.includes('common_name')) {
    item.common_name = item.names.find(name => name.class === 'common_name').name
  } else if (classes.includes('blast_name')) {
    item.common_name = item.names.find(name => name.class === 'blast_name').name
  } else if (classes.includes('scientific_name')) {
    item.common_name = item.names.find(name => name.class === 'scientific_name').name
  } else if (classes.includes('synonym')) {
    item.common_name = item.names.find(name => name.class === 'synonym').name
  } else {
    item.common_name = 'name unkown'
  }
}

export const set_breadcrumbs = (taxon) => {
  let breadcrumbs = [{ label: 'Home', path: '/'}]
  for (let h of taxon.hierarchy) {
    breadcrumbs.push({ label: h.display_name, path: `/${h.__typename}/${h.tax_id}` })
  }
  breadcrumbs.push({ label: taxon.display_name })
  return breadcrumbs
}

export const sort_by_name = (children) => {
  children.sort(function (a,b) {
    var name_a = a.display_name.toUpperCase()
    var name_b = b.display_name.toUpperCase()   
    if (name_a < name_b) {
      return -1
    }
    if (name_a > name_b) {
      return 1
    }

    return 0
  })
}