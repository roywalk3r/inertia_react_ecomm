import {
    IoBagAddOutline,
    IoEyeOutline,
    IoHeartOutline,
    IoRepeatOutline,
} from "react-icons/io5";

export default function ShowcaseAction() {
    return (
        <div className="showcase-actions">
            <button className="btn-action">
                <IoHeartOutline />
            </button>

            <button className="btn-action">
                <IoEyeOutline />
            </button>

            <button className="btn-action">
                <IoRepeatOutline />
            </button>

            <button className="btn-action">
                <IoBagAddOutline />
            </button>
        </div>
    );
}
