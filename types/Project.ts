import {PortableTextBlock} from 'sanity';

export type Project = {
    id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    alt: string;
    content: PortableTextBlock[];
}