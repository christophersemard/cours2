// src/types/strapi.ts

export type StrapiResponse<DataType> = {
    data: DataType;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: 1;
        };
    };
};

export type StrapiData<Entity> = {
    data: StrapiEntity<Entity>;
};
export type StrapiDataArray<Entity> = {
    data: Array<StrapiEntity<Entity>>;
};

export type StrapiEntity<Entity> = {
    id: number;
    attributes: Entity;
};

export type Posts = {
    title: string;
    content: StrapiRichtext;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    thumbnail: StrapiData<Thumbnail>;
    author: StrapiData<User>;
    comments: StrapiDataArray<Comment>;
};

export type User = {
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
};
export type Thumbnail = {
    url: string;
    name: string;
};

export type Comment = {
    comment: string;
    author: StrapiData<User>;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    publishedOn: string;
};

type StrapiRichtext = Array<{
    type: string;
    children: Array<{ text: string }>;
}>;
