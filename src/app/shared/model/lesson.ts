/**
 * Created by odyssefs on 21.12.17.
 */
export class Lesson {
  constructor (
    public $key:string,
    public description: string,
    public duration:string,
    public url: string,
    public tags: string,
    public pro: boolean,
    public longDescription: string,
    public courseId: string
  ){}
}
