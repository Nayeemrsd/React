export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerEmail: string;
  reviewerName: string;
}

export interface Product {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: {
    width: 15.14;
    height: 13.08;
    depth: 22.99;
  };
  discountPercentage: number;
  id: number;
  images: string[];
  meta: {
    createdAt: "2025-04-30T09:41:02.053Z";
    updatedAt: "2025-04-30T09:41:02.053Z";
    barcode: "5784719087687";
    qrCode: "https://cdn.dummyjson.com/public/qr-code.png";
  };
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: Review;
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
}

export interface CartItem extends Product {
  quantity: number;
}
