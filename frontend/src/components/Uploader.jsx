export function Uploader()
{
    return (
        <div className="m-5 border border-dark rounded">
            <label for="formFile" className="form-label m-3">Upload your video</label>
            <input className="form-control" type="file" id="formFile" />
            <div className="m-3">
                <button type="button" className="btn btn-outline-secondary">Upload</button>
                <button type="button" className="btn btn-outline-danger ms-3">Cancel</button>
            </div>
        </div>
    )
}