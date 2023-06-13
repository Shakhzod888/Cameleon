import React from "react";
import "../links/links.scss"

export default class Links extends React.Component {
    render() {
        return (
            <div className="linkes">
                <div className="link_1">
                    <div className="number">
                        <div className="ll">No</div>
                        <div>1.</div>
                        <div>2.</div>
                        <div>3.</div>
                        <div>4.</div>
                        <div>5.</div>
                        <div>6.</div>
                        <div>7.</div>
                        <div>8.</div>
                    </div>

                    <div className="siteTitle">
                        <div className="ll">Site title</div>
                        <div>Stack Overflow</div>
                        <div>Youtube</div>
                        <div>Git Hub</div>
                        <div>Gosh William</div>
                        <div>Stack Overflow</div>
                        <div>Stack Overflow</div>
                        <div>Stack Overflow</div>
                        <div>Stack Overflow</div>
                    </div>
                </div>

                <div className="link_2">
                    <div>
                        <div className="ll">Link</div>
                        <div><a href="https://stackoverflow.com/question/..">https://stackoverflow.com/question/..</a></div>
                        <div><a href="https://stackoverflow.com/question/..">https://stackoverflow.com/question/..</a></div>
                        <div><a href="https://stackoverflow.com/question/..">https://stackoverflow.com/question/..</a></div>
                        <div><a href="https://stackoverflow.com/question/..">https://stackoverflow.com/question/..</a></div>
                        <div><a href="https://stackoverflow.com/question/..">https://stackoverflow.com/question/..</a></div>
                        <div><a href="https://stackoverflow.com/question/..">https://stackoverflow.com/question/..</a></div>
                        <div><a href="https://stackoverflow.com/question/..">https://stackoverflow.com/question/..</a></div>
                        <div><a href="https://stackoverflow.com/question/..">https://stackoverflow.com/question/..</a></div>
                    </div>

                    <div>
                        <div className="ll">Total clicks</div>
                        <dir>120</dir>
                        <dir>14,522</dir>
                        <dir>36</dir>
                        <dir>580</dir>
                        <dir>112</dir>
                        <dir>4</dir>
                        <dir>51</dir>
                        <dir>68</dir>
                    </div>

                    <div>
                        <div className="ll">Referrer type</div>
                        <div>nofollow, noopener</div>
                        <div>nofollow</div>
                        <div>nofollow</div>
                        <div>ugc</div>
                        <div>nofollow, noopener</div>
                        <div>nofollow, noopener</div>
                        <div>nofollow, noopener</div>
                        <div>nofollow, noopener</div>
                    </div>
                </div>
            </div>
        );
    }
}
