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

interface HomePage {
    page_description: string;
    title: string;
    todo_list: Array<Todo>
}

interface Todo {
    todo: string;
    done: boolean;
}