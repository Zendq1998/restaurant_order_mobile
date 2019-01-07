import { GraphQLClient } from 'graphql-request'

const authClient = new GraphQLClient('/api/graphql', {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

// const baseClient = new GraphQLClient('/api/graphql')

export function getGoods() {
  return authClient.request(`
    {
      food {
        categories {
          id
          name
        }
        foods {
          categoryId
          id
          image
          name
          unitPrice
        }
      }
    }
  `)
}

export function createOrder(foodList, rid) {
  return authClient.request(`
    mutation createOrder($roomId: Int!, $foodList: [FoodListItemInputType]!){
      order{
        createOrder(roomId: $roomId, foodList: $foodList)
      }
    }
  `, {
    roomId: rid,
    foodList: foodList
  })
}
