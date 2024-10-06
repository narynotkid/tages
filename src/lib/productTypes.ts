export type ProductItem = {
    id: number;
    name: string;
    code: string | null;
    price: {
        old_price: string | null;
        current_price: string;
    };
    image: {
        url: string;
    };
    material: number;
};