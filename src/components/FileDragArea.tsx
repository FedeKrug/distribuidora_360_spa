import { useState } from "react";
import styled from "styled-components";

export const FileDragArea = () => {
  const [ImageSelectedPrevious, setImageSelectedPrevious] = useState(null);
  const changeImage = (e: any) => {
    console.log(e.target.files);
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e: any) => {
        e.preventDefault();
        setImageSelectedPrevious(e.target.result); // le damos el binario de la imagen para mostrarla en pantalla
      };
    }
  };
  return (
    <div>
      <StyleDragArea>
        <br />
        {
          ImageSelectedPrevious ?
            <div className="center mt-3">
              <img
                src={ImageSelectedPrevious!}
                alt="foto de mayorista"
                height="200px"
                width="200px"
              />
            </div>
            : null
        }

        <div className="image-upload-wrap">
          <input
            className="file-upload-input"
            type="file"
            multiple
            onChange={(e) => {
              changeImage(e);
            }}
          />
          <div className="text-information">
            <h3>Subí o arrastrá una imagen para el mayorista</h3>
          </div>
        </div>


      </StyleDragArea>
    </div>
  );
}


const StyleDragArea = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .file-upload-content {
    display: none;
    text-align: center;
  }

  .file-upload-input {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    cursor: pointer;
  }

  .image-upload-wrap {
    position: relative;
    height: 100px;
    border: 4px solid #d0d7de;
    margin-left: 10px;
    margin-right: 10px;
  }

  .image-upload-wrap:hover {
    background-color: transparent;
    border: 4px dashed #d0d7de;
  }
  .text-information {
    margin-top: 15px;
    text-align: center;
    
  }
`;