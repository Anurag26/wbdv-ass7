import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (cid) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/bannur/courses/${cid}/modules`)
      .then(response => response.json())
}
