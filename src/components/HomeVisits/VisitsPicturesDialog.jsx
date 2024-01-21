import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import SubImageCarousel from '../SubImagesCarousel';

export const VisitsPicturesDialog = React.memo(({ dialog, setDialog, selected, setSelected }) => {
    return (
        <React.Fragment>
            <Dialog
                open={dialog}
                onClose={() => { setDialog(false); setSelected(null) }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className='flex justify-between items-center pr-5 flex-wrap'>
                    <div id="alert-dialog-title" style={{ color: "grey", margin: "14px 3px 10px 20px", width: "auto", fontSize: "22px" }}>
                        {selected?.title}
                    </div>
                    <CloseIcon style={{ color: "grey", cursor: "pointer", display: `${window.innerWidth < 490 ? 'none' : ''}` }} onClick={() => { setDialog(false); setSelected(null) }} />
                </div>
                <DialogContent>
                    <div className='max-w-lg' autoSlide={true} autoSlideInterval={3000}>
                        <SubImageCarousel>
                            {selected?.images.map((image, index) => (
                                <img src={image} alt="" loading="lazy"/>
                            ))}
                        </SubImageCarousel>
                    </div>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
});

VisitsPicturesDialog.propTypes = {
    dialog: PropTypes.bool.isRequired,
    setDialog: PropTypes.func.isRequired,
    selected: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }),
    setSelected: PropTypes.func.isRequired
}