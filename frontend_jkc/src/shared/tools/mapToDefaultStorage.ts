import { getAllVehicles as getAllVehicles, getVehicleById as getVehicleById, createVehicle, updateVehicle, deleteVehicle, getVehiclesByName as getVehiclesByName,
  createUser, login, getServiceTasksByName, createServiceTask, deleteServiceTask, updateServiceTask,getWorkShopsByName,deleteWorkShop, updateWorkShop, createWorkShop, 
  createMaintenance, updateMaintenance, deleteMaintenance, getAllMaintenances
} from '../services/api';

// import { createUserLS, loginLS, getCategoriesByNameLS, createCategoryLS, updateCategoryLS, deleteCategoryLS } from '../services/localStorage';
// import { getPostsByTitleLS, createPostLS, deletePostLS, updatePostLS } from '../services/localStorage/posts';
 
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
      
      case 'getServiceTasksByName': return getServiceTasksByName(functionParameter);
      case 'deleteServiceTask': return deleteServiceTask(functionParameter);
      case 'updateServiceTask': return updateServiceTask(functionParameter);
      case 'createServiceTask': return createServiceTask(functionParameter);

      case 'getWorkShopsByName': return getWorkShopsByName(functionParameter);
      case 'deleteWorkShop': return deleteWorkShop(functionParameter);
      case 'updateWorkShop': return updateWorkShop(functionParameter);
      case 'createWorkShop': return createWorkShop(functionParameter);

      case 'getAllMaintenances': return getAllMaintenances();
      case 'deleteMaintenance': return deleteMaintenance(functionParameter);
      case 'updateMaintenance': return updateMaintenance(functionParameter);
      case 'createMaintenance': return createMaintenance(functionParameter);

      case 'login': return login(functionParameter);
      default: return null;
      }
    }

    // switch (functionName) {
    // case 'createUser': return createUserLS(functionParameter);
    // case 'login': return loginLS(functionParameter);
    // case 'getCategoriesByName': return getCategoriesByNameLS(functionParameter);
    // case 'createCategory': return createCategoryLS(functionParameter);
    // case 'updateCategory': return updateCategoryLS(functionParameter);
    // case 'deleteCategory': return deleteCategoryLS(functionParameter);
    // case 'getPostsByName': return getPostsByTitleLS(functionParameter);
    // case 'createPost': return createPostLS(functionParameter);
    // case 'deletePost': return deletePostLS(functionParameter);
    // case 'updatePost': return updatePostLS(functionParameter);
    // default: return null;
    // }
  };

  return mapFunction;
};