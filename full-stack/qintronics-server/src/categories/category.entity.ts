import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Product } from 'src/products/product.entity';
import { Section } from 'src/sections/section.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    type: String,
    description: 'Category ID',
    example: '0ff3e9c2-ec93-4735-a1da-50c834a78ffc',
  })
  id: string;

  @Column()
  @ApiProperty({
    type: String,
    description: 'Category name',
    example: 'Laptops',
  })
  name: string;

  @Column({ name: 'icon_URL' })
  @ApiProperty({
    type: String,
    description: 'Category icon URL',
    example: './images/laptops.png',
  })
  iconURL: string;

  @OneToMany(() => Product, (product) => product.category)
  @ApiPropertyOptional({
    type: Product,
  })
  products: Product[];

  @ManyToOne(() => Section, (section) => section.categories)
  @JoinColumn({ name: 'section_id' })
  section: Section;

  @Column({ name: 'section_id' })
  @ApiProperty({
    type: String,
    description: 'The ID of the category section',
    example: '0ff3e9c2-ec93-4735-a1da-50c834a78ffc',
  })
  sectionId: string;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty({
    type: String,
    description: 'Category created date',
    example: '2023-01-01T00:00:00.000Z',
  })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty({
    type: String,
    description: 'Category updated date',
    example: '2023-01-01T00:00:00.000Z',
  })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  @ApiProperty({
    type: String,
    description: 'Category updated date',
    example: '2023-01-01T00:00:00.000Z',
  })
  deletedAt: Date;
}
