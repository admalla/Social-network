import React, {useEffect, useState} from 'react';

const StatusProfile = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const handleStatus = (e) => {
        setStatus(e.target.value );
    };

    const isWho = () => {
        return props.authUserId === props.profileId;
    };

    const activate = () => {
        if (isWho()) {
            setEditMode(!editMode );
        }
    };
    const deactivate = () => {
        setEditMode(false );
        props.updateStatus(status);
    };

    useEffect(() => {
        if(status !== props.status) {
            setStatus(props.status)
        }
    },[])


    return (
        <div>
            {!editMode ? (
                <div>
            <span onDoubleClick={activate}>
              {isWho()
                  ? status || props.status
                  : props.status || 'not status'}
            </span>
                </div>
            ) : (
                <div>
                    <input
                        autoFocus={true}
                        onChange={handleStatus}
                        value={status}
                        onBlur={deactivate}
                    />
                </div>
            )}
        </div>
    );
};

export default StatusProfile;
