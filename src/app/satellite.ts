// import { Satellite } from './satellite';
export class Satellite {
name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;
constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    this.name=name;
    this.type=type;
    this.orbitType=orbitType;
    this.launchDate=launchDate;
    this.operational=operational;  
}
// shouldShowWarning():boolean{
//     return this.type==='Space Debris';
//    }
shouldShowWarning():boolean{
    if (this.type==='Space Debris'){
        return true
    }else{
        return false
    };
  }
}
