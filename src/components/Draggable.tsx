"use client";

import { FC, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Reorder } from 'framer-motion';

interface DraggableProps {

}

const Draggable: FC<DraggableProps> = ({ }) => {
    const [items, setItems] = useState([1, 2, 3, 4, 5]);

    return <main>
        <Reorder.Group values={items} onReorder={setItems}>
            {items.map((item) => (
                <Reorder.Item key={item} value={item}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Item {item}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet placeat suscipit distinctio ratione laborum assumenda ducimus possimus incidunt fugiat non atque repellendus ullam, aliquam commodi consectetur optio rerum ex magnam.
                            </p>
                        </CardContent>
                    </Card>
                </Reorder.Item>
            ))}
        </Reorder.Group>
    </main >
}

export default Draggable