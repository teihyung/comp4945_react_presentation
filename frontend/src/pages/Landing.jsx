import React from 'react';
import "../styles/Landing.css";

export function Landing() {
    return (
        <div className="Landing">
            <h1>Welcome to Our Website</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis justo non augue aliquet, sed aliquet libero scelerisque.</p>
            <div className="Features">
                <div className="Feature">
                    <h2>Feature 1</h2>
                    <p>Integer euismod, ligula vitae vehicula gravida, metus odio laoreet mauris, ac dapibus mauris felis nec velit.</p>
                </div>
                <div className="Feature">
                    <h2>Feature 2</h2>
                    <p>Fusce maximus metus nec mi aliquet, a tincidunt turpis vestibulum. Curabitur euismod felis ac efficitur.</p>
                </div>
                <div className="Feature">
                    <h2>Feature 3</h2>
                    <p>Proin consequat ipsum eget diam venenatis, in molestie lacus feugiat. Donec aliquet ultricies tellus vitae ultrices.</p>
                </div>
            </div>
        </div>
    );
}
