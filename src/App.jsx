import Find from "./components/docs/Find";
import Skel from "./components/docs/Skeleton-diff";
import Work from "./components/docs/Work";
import { useRef } from "react";

export default function App() {
    const cursor = useRef(null);

    const changePosition = (e) => {
        cursor.current.style.left = `${e.clientX}px`;
        cursor.current.style.top = `${e.clientY}px`;
    };

    return (
        <div
            className="app"
            onMouseMove={changePosition}
            onScroll={changePosition}
        >
            {/* Cursor code */}
            <div
                ref={cursor}
                className="cursor"
                // style={{ left: cursor.left, top: position.top }}
            />
            {/* < Nav />
      < Skeleton /> */}
            <Skel />
            <Work />
            <Find />
            <footer className="credit">
                <span className="foot">Designed & Developed by </span>
                <span className="foot-name">Deep Patel</span>
            </footer>
        </div>
    );
}
