export interface Seo {
    seo_title: string
    seo_h1: string
    seo_head: string
    seo_body: string
    seo_description: string
    seo_keywords: string
}

export interface ResponseObject<T> {
    data: T
    msg: string,
    code: number,
}

export interface Pagination<DataType> {
    current_page?: number;
    data?: DataType;
    first_page_url?: string;
    from?: number;
    last_page?: number;
    last_page_url?: string;
    next_page_url?: string;
    path?: string;
    per_page?: number;
    prev_page_url?: null;
    to?: number;
    total?: number;
}

export interface Image {
    id: number;
    model_type: string;
    model_id: number;
    uuid: string;
    collection_name: string;
    name: string;
    file_name: string;
    mime_type: string;
    disk: string;
    conversions_disk: string;
    size: number;
    manipulations: any[];
    custom_properties: any[];
    generated_conversions: GeneratedConversions;
    responsive_images: any[];
    order_column: number;
    created_at: Date;
    updated_at: Date;
    url: string;
    thumbnail: string;
    preview: string;
    original_url: string;
    preview_url: string;
}

export interface GeneratedConversions {
    thumb: boolean;
    preview: boolean;
}

export interface AwardRanking {
    id: number;
    award_id: number;
    name: string;
    year: string;
    deleted_at: null;
    created_at: Date;
    updated_at: Date;
    business: any[];
    product: any[];
}

export interface FilterItem {
    id: number
    name: string
    checked: boolean
}

export interface BusinessList {
    id: number
    name: string
    description: string
    description_extension: string
    purchase_path: string
    seo_h1: string
    seo_head: string
    seo_body: string
    seo_title: string
    seo_description: string
    seo_keywords: string
    sort: number
    is_hot: number
    deleted_at: string
    created_at: string
    updated_at: string
    productImages: any
    media: any
}
