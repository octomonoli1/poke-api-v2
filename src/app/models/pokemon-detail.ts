export class PokemonDetail {
    private _id: number;
    private _weight: number;
    private _height: number;
    private _types: string[];
    private _image: string;
    private _name: string;

    constructor(id: number, weight: number, height: number, types: string[], image: string, name: string){
        this._id = id;
        this._weight = weight;
        this._height = height;
        this._types = types;
        this._image = image;
        this._name = name;
    }

    public get id(): number { return this._id; }
    public set id(value: number) { this._id = value; }
    public get weight(): number { return this._weight; }
    public set weight(value: number) { this._weight = value; }
    public get height(): number { return this._height; }
    public set height(value: number) { this._height = value; }
    public get types(): string[] { return this._types; }
    public set types(value: string[]) { this._types = value; }
    public get image(): string { return this._image; }
    public set image(value: string) { this._image = value; }
    public get name(): string { return this._name; }
    public set name(value: string) { this._name = value; }

}
