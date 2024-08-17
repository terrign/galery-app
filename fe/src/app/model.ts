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
  imageURL: string;
};

type TGalery = Record<string, TGaleryItem>;

export { RoutePath, type TGaleryItem, type TGalery };
