import {Element} from 'svgjs';

declare module 'svgjs' {
  type draggyCoords = {x:number|boolean, y:number|boolean}|boolean;
  type draggyConstraintFunction = (x:number, y:number) => draggyCoords;
  type draggyConstraintOptions = {
    minX:number,
    maxX:number,
    minY:number,
    maxY:number
  }
  type draggyConstraint = draggyConstraintFunction|draggyConstraintOptions;
  export interface Element{
    draggy: (options?:draggyConstraint) => any;
  }
}