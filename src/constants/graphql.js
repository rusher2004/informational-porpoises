import gql from 'graphql-tag'

export const SEARCH_QUERY = gql`
query searchQuery($searchText: String!) {
  name_search(searchText: $searchText)
}`

export const GET_KINGDOMS_QUERY = gql`
query getKingdomsQuery {
  kingdom {
    tax_id
    names {
      name
      class
      uuid
    }
  }
}`

export const GET_KINGDOM_DATA_QUERY = gql`
query getKingdomDataQuery($tax_id: ID!) {
  kingdom(
    tax_id: $tax_id
  ) {
    tax_id
    names {
      name
      class
      uuid
    }
    phyla {
      tax_id
      names {
        name
        class
        uuid
      }
    }
  }
}`

export const GET_PHYLUM_DATA_QUERY = gql`
query getPhylumDataQuery($tax_id: ID!) {
  phylum(
    tax_id: $tax_id
  ) {
    tax_id
    names {
      name
      class
      uuid
    }
    kingdom {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    classes {
      tax_id
      names {
        name
        class
        uuid
      }
    }
  }
}`

export const GET_CLASS_DATA_QUERY = gql`
query getClassDataQuery($tax_id: ID!) {
  class(
    tax_id: $tax_id
  ) {
    tax_id
    names {
      name
      class
      uuid
    }
    kingdom {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    phylum {
      tax_id 
      names {
        name
        class
        uuid
      }
    }
    orders {
      tax_id
      names {
        name
        class
        uuid
      }
    }
  }
}`

export const GET_ORDER_DATA_QUERY = gql`
query getOrderDataQuery($tax_id: ID!) {
  order(
    tax_id: $tax_id
  ) {
    tax_id
    names {
      name
      class
      uuid
    }
    kingdom {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    phylum {
      tax_id 
      names {
        name
        class
        uuid
      }
    }
    class {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    families {
      tax_id
      names {
        name
        class
        uuid
      }
    }
  }
}`

export const GET_FAMILY_DATA_QUERY = gql`
query getFamilyDataQuery($tax_id: ID!) {
  family(
    tax_id: $tax_id
  ) {
    tax_id
    names {
      name
      class
      uuid
    }
    kingdom {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    phylum {
      tax_id 
      names {
        name
        class
        uuid
      }
    }
    order {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    class {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    genera {
      tax_id
      names {
        name
        class
        uuid
      }
    }
  }
}`

export const GET_GENUS_DATA_QUERY = gql`
query getGenusDataQuery($tax_id: ID!) {
  genus(
    tax_id: $tax_id
  ) {
    tax_id
    names {
      name
      class
      uuid
    }
    kingdom {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    phylum {
      tax_id 
      names {
        name
        class
        uuid
      }
    }
    order {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    class {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    family {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    species {
      tax_id
      names {
        name
        class
        uuid
      }
    }
  }
}`

export const GET_SPECIES_DATA_QUERY = gql`
query getSpeciesDataQuery($tax_id: ID!) {
  species(
    tax_id: $tax_id
  ) {
    tax_id
    names {
      name
      class
      uuid
    }
    kingdom {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    phylum {
      tax_id 
      names {
        name
        class
        uuid
      }
    }
    order {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    class {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    family {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    genus {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    subspecies {
      tax_id
      names {
        name
        class
        uuid
      }
    }
  }
}`

export const GET_SUBSPECIES_DATA_QUERY = gql`
query getSubspeciesDataQuery($tax_id: ID!) {
  subspecies(
    tax_id: $tax_id
  ) {
    tax_id
    names {
      name
      class
      uuid
    }
    kingdom {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    phylum {
      tax_id 
      names {
        name
        class
        uuid
      }
    }
    order {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    class {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    family {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    genus {
      tax_id
      names {
        name
        class
        uuid
      }
    }
    species {
      tax_id
      names {
        name
        class
        uuid
      }
    }
  }
}`

export const GET_SPECIES_QUERY = gql`
query getSpeciesQuery($tax_id: ID!) {
  species(
    tax_id: $tax_id
  ) {
    tax_id
    names {
      name
      class
      uuid
    }
  }
}`

export const GET_TAXON_QUERY = gql`
query getTaxonQuery($tax_id: ID!) {
  taxon(
    tax_id: $tax_id
  ) {
    ... on species {
      tax_id
    }
  }
}
`

export const GET_SPECIES_WITH_FACTS_QUERY = gql`
query getSpeciesQuery($tax_id: ID!) {
  species(
    tax_id: $tax_id
  ) {
    tax_id
    names {
      name
      class
      uuid
    }
    pending_facts {
      text
      source
      uuid
      creator {
        ... on admin_user {
          username
          uuid
        }
      }
    }
  }
}`

export const ALL_ANIMALS_QUERY = gql`
query allAnimals{
  allAnimals {
    id
    name
    description
  }
}`

export const ALL_FACTS_QUERY = gql`
query allFacts {
  allFacts {
    id
    text
  }
}`

export const ADD_FACT_MUTATION = gql`
mutation CreateFactMutation($factId: ID!, $factText: String!, $animalId: ID!) {
  cf: CreateFact(
    id: $factId,
    text: $factText
    ) {
      id
    }
  af: AddAnimalFacts(
    from: { id: $factId },
    to: { id: $animalId }
    ) {
      from {
        id
        text
      }
      to {
        id
        name
        description
      }
    }
}`