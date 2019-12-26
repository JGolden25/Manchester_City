import React from 'react';
import { Tag } from '../../ui/misc';

const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                bck="#0e1731"
                size="50px"
                color="#ffffff"
                add={{
                    color: 'red'
                }}
                >
                Matches
                </Tag>
                BLOCK
                <Tag
                bck="#ffffff"
                size="22px"
                color="#0e1731"
                link={true}
                linkto="/theteam"
                >
                    See more matches
                </Tag>

                TAG
            </div>
        </div>
    );
};

export default MatchesHome;