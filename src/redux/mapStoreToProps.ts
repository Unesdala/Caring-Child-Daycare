export interface IImage {
  image: string,
}

export interface Store {
  images: { images: IImage[] };
}

const mapStoreToProps = (store: Store): Record<string, unknown> => ({
  images: store.images.images,
});
export default mapStoreToProps;
