import { Explicit_content, ExternalUrls, Followers, Image } from "./commonType";

export interface User {
  country?: string;
  display_name?: string;
  email?: string;
  explicit_content?: Explicit_content;
  external_urls: ExternalUrls;
  followers: Followers;
  href?: string;
  id?: string;
  images: Image[];
  product?: string;
  type?: string;
  uri?: string;
}
