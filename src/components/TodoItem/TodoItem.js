import React from 'react'
import { useDispatch } from "react-redux";
import { Card, CardBody, CardHeader, CardTitle, CardText, Button, CardFooter } from 'reactstrap';
import { deleteTask } from '../../redux/TaskSlices';
export const TodoItem = ({ id, title }) => {

  const dispatch = useDispatch();
	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}

  return (
    <div className="container task-item">
      <Card
        className="my-2"
        style={{
          width: '18rem'
        }}
      >
        <CardHeader>
          Header
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            {title}
          </CardTitle>
          <Button onClick={()=>{
					removeTask();
				}}>
            Delete
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
