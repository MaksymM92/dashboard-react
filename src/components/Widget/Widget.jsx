import { IconButton, Paper } from "@mui/material";
import { Edit } from "@mui/icons-material";
import './Widget.css';

export const Widget = ({title, children}) => {
    return (
        <Paper className="widget">
            <div className="widget-header">
                <div className="widget-title">{title}</div>
                <div className="widget-button">
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <Edit/>
                    </IconButton>
                </div>
            </div>
            {children}
        </Paper>
    )
}