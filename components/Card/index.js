import Script from "next/script"

export default function Card({
    degree = "none",
    colour = "purple",
    font = "15px",
    image = "icon/person.png",
    border = "5px"

}) {
    return (
        <div style={{ backgroundColor: colour, fontSize: font, borderRadius: border }}>
            {
                colour === "gray" ? <img src={"icon/person.png"} width="50" /> :
                    colour === "pink" ? <img src={"icon/personThree.png"} width="50" /> :
                        colour === "" ? <img src={"icon/person.png"} width="100" /> :
                            <img src={image} width="50" />

            }
            {degree}
        </div>
    )
}