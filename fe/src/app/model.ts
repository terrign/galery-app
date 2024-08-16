enum RoutePath {
  HOME = '',
  GALERY = 'galery',
  ADD = 'add',
  EDIT = 'edit',
}

type TGaleryItem = {
  id: string;
  title: string;
  desc: string;
  image: string;
};

export { RoutePath, type TGaleryItem };
