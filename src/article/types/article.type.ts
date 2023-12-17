import { ArticleEntity } from '../../database/entities/article.entity';

export type ArticleType = Omit<ArticleEntity, 'updateTimeStamp'>;
