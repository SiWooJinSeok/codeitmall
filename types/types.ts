interface ProductType {
  id: string;
  name: string;
  englishName: string;
  brand: string;
  productCode: string;
  price: number;
  salePrice: number;
  starRating: number;
  starRatingCount: number;
  likeCount: number;
  point: number;
  imgUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

interface SizeType {
  id: string;
  sex: string;
  height: number;
  size: string;
  fit: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
}

interface LabelType {
  sex: {
    [key: string]: string;
  };
  fit: {
    [key: string]: string;
  };
}
