import {saveYourSelfSection} from './constant';
import { Button , Container} from '@mui/material';
function SaveYourSelf() {
  return (
    <Container className='saveYourSelfContainer'>
        <div className="outlined"> {saveYourSelfSection.productivitybox}</div>
        <div>
            <div className='header saveYourSelfTitle'>{saveYourSelfSection.title}</div>
            <div className='subContent'>{saveYourSelfSection.subContent}</div>
        </div>
        <img className='saveYourSelfImage' src={saveYourSelfSection.laptoplandingImageUrl} alt="laptopImage"/>


    </Container>
   
  );
}

export default SaveYourSelf;
