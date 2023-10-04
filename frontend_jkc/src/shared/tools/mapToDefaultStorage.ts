import { getAllVehicles as getAllVehicles, getVehicleById as getVehicleById, createVehicle, updateVehicle, deleteVehicle, getVehiclesByName as getVehiclesByName,
  createUser, login, getPostsByName, createPost, deletePost, updatePost } from '../services/api';

import { createUserLS, loginLS, getCategoriesByNameLS, createCategoryLS, updateCategoryLS, deleteCategoryLS } from '../services/localStorage';
import { getPostsByTitleLS, createPostLS, deletePostLS, updatePostLS } from '../services/localStorage/posts';

export const mapToDefaultStorage = (usingBD = true) => {

  const mapFunction = (functionName:string, functionParameter:any) => {
    if (usingBD) {
      switch (functionName) {//getVehiclesByName
      case 'getAllVehicles': return getAllVehicles();
      case 'getVehiclesByName': return getVehiclesByName(functionParameter);
      case 'getVehicleById': return getVehicleById(functionParameter);
      case 'createVehicle': return createVehicle(functionParameter);
      case 'updateVehicle': return updateVehicle(functionParameter);
      case 'deleteVehicle': return deleteVehicle(functionParameter);
      case 'createUser': return createUser(functionParameter);
      case 'getPostsByName': return getPostsByName(functionParameter);
      case 'createPost': return createPost(functionParameter);
      case 'deletePost': return deletePost(functionParameter);
      case 'updatePost': return updatePost(functionParameter);
      case 'login': return login(functionParameter);
      default: return null;
      }
    }

    switch (functionName) {
    case 'createUser': return createUserLS(functionParameter);
    case 'login': return loginLS(functionParameter);
    case 'getCategoriesByName': return getCategoriesByNameLS(functionParameter);
    case 'createCategory': return createCategoryLS(functionParameter);
    case 'updateCategory': return updateCategoryLS(functionParameter);
    case 'deleteCategory': return deleteCategoryLS(functionParameter);
    case 'getPostsByName': return getPostsByTitleLS(functionParameter);
    case 'createPost': return createPostLS(functionParameter);
    case 'deletePost': return deletePostLS(functionParameter);
    case 'updatePost': return updatePostLS(functionParameter);
    default: return null;
    }
  };

  return mapFunction;
};