export interface Producto {
  marca: string,
  nombre: string,
  descripcion: string,
  peso: string,
  imgUrl: string,
  tipoMascota:string,
  precio:{fechaDesde:Date,valor:number},
  promo:boolean,
  //valorM?:Number,
  _id?: string
}
