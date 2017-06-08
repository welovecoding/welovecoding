import AuthorDTO from "./AuthorDTO";
import BaseDTO from "./BaseDTO";

export default class PlaylistDTO extends BaseDTO {
  public categoryName: string;
  public code: string;
  public description: string;
  public difficulty: string;
  public language: string;
  public owner: AuthorDTO;
  public providerName: string;
  private videos: Array<string> = [];

  constructor(id: number, name: string) {
    super(id, name);
  }

  get numberOfVideos(): number {
    return this.videos.length;
  }
}
