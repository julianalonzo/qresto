import { addFood, editFood, listFoods, removeFood } from '../use-cases'
import makeDeleteFood from './delete-food'
import makeGetFoods from './get-foods'
import makePatchFood from './patch-food'
import makePostFood from './post-food'

const deleteFood = makeDeleteFood({ removeFood })
const getFoods = makeGetFoods({ listFoods })
const postFood = makePostFood({ addFood })
const patchFood = makePatchFood({ editFood })

const foodController = Object.freeze({
  deleteFood,
  getFoods,
  postFood,
  patchFood
})

export default foodController
export { deleteFood, getFoods, postFood, patchFood }
