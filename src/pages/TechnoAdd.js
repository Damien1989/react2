export default function TechnoAdd(){
    return (
            <div className="techno-add">
                <h1>Add a techno</h1>
                <div>
                    <form>
                        <label htmlFor="techno-name">Name</label>
                        <br />
                        <input type="text" name="techno-name" id="techno-name" />
                        <br />
                        <label htmlFor="techno-category">Catégorie</label>
                        <br />
                        <select name="techno-category" id="techno-category">
                            <option value="">Sélectionner catégorie</option>
                            <option value="Front">Front</option>
                            <option value="back">Back</option>
                            <option value="other">Autre</option>
                        </select>
                        <br />
                        <label htmlFor="techno-description">Description :</label>
                        <br />
                        <textarea name="techno-description" id="techno-description" cols="30" rows="10" />
                        <br/>
                        <input type="submit" value="Add Techno"/>
                    </form>
                </div>
            </div>
    )
}