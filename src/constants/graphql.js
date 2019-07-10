import gql from 'graphql-tag'

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
  taxons(
    tax_id: $tax_id
  ) {
    tax_id
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

export const ADD_ANIMAL_MUTATION = gql`
mutation CreateAnimalMutation($id: ID!, $name: String!, $description: String!) {
  CreateAnimal(
    id: $id,
    name: $name,
    description: $description,
  ) {
    id
    name
    description
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