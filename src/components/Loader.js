import React from "react";

class Loader extends React.Component {
    render(){
        return (
            <div style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    position: "absolute",
                    width: "200px",
                    height: "200px",
                    border: "2px solid #ddd",
                    borderRight: "5px solid #333",
                    borderRadius: "50%",
                    animation: "spin .7s infinite linear"
                }}/>
                <div style={{
                    position: "absolute",
                    width: "150px",
                    height: "150px",
                    border: "2px solid #ddd",
                    borderLeft: "5px solid #8EBB88",
                    borderRadius: "50%",
                    animation: "spin2 .7s infinite linear"
                }}/>
                <div style={{
                    position: "absolute",
                    width: "80px",
                    transform: "rotate(15deg)",
                    animation: "shake .7s infinite alternate linear"
                }}>
                    <img src={"logo.png"} alt={"loader logo"} style={{
                        width: "100%",
                        height: "100%"
                    }}/>
                </div>
            </div>
        )
    }
}

export default Loader;