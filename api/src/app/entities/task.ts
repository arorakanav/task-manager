
import { Entity, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from './';
import { Status } from '../task/enums';





@Entity('tasks')
export default class Task {
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ type: 'enum', enum: Status, default: Status.TODO })
    status: Status;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
    @Column({ type: 'timestamp', nullable: true })
    dueDate?: Date;

    @Column({ type: 'int', default: 0 })
    priority?: number;

    @Column()
    projectId: number;

    @ManyToOne(() => User, { eager: true })
    assignee: User;

    @Column()
    assigneeId: string;


}
