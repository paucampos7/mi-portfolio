import React from 'react';
import { Resume } from '../../components/06Resume';
import { Skills } from '../../components/07skills';
import './resume.css'

const ResumePage = () => {
    return(
        <div>

<Resume/>
<Skills/>

        </div>
    )
}

export { ResumePage }