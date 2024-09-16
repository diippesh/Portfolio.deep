import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.slice(0, 3).map((work, index) => (
                    <div key={index}>

                        <a href={work.w_link} key={index}>
                            <img src={work.w_img} alt={`work-${index}`} />
                        </a>
                        <p className='myWorkDesc'>
                            {work.w_desc}
                        </p>
                    </div>
                ))}
                {showMore && mywork_data.slice(3).map((work, index) => (
                    <div key={index}>
                        <a href="#" key={index + 3}>
                            <img src={work.w_img} alt={`work-${index + 3}`} />
                        </a>
                        <p className='myWorkDesc'>
                            {work.w_desc}
                        </p>
                    </div>

                ))}
            </div>
            <div className="mywork-showmore" onClick={handleShowMore}>
                <p>{showMore ? 'Show Less' : 'Show More'}</p>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    );
};

export default MyWork;