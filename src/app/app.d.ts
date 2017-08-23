interface AdminInfo{
    about: string;
    image: any;
    name: string;
    resource: Resources;
}

interface Resources {
    twitter: string;
    gitshowcase: string;
    angular4: string;
    sites: Array<string>;
}