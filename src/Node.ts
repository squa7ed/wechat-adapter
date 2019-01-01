import { EventTarget } from "./EventTarget";

export class Node extends EventTarget {

  appendChild(newChild: Node): Node { return newChild; }
}