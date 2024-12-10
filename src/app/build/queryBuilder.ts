import { Query } from 'mongoose';

class QueryBuilder<T> {
  public query: Record<string, any>;
  public queryModel: Query<T[], T>;

  // define conostructor
  constructor(query: Record<string, any>, queryModel: Query<T[], T>) {
    this.query = query;
    this.queryModel = queryModel;
  }

  // define searching method
  search(searchingFields: string[]) {
    if (this?.query?.searchTerm) {
      this.queryModel = this.queryModel.find({
        $or: searchingFields.map((filed) => ({
          [filed]: { $regex: this.query.searchTerm, $options: 'i' },
        })),
      });
    }
    return this;
  }

  // define filltering method
  filter() {
    const filteringQuery = { ...this.query };
    const exludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
    exludeFields.map((fld) => delete filteringQuery[fld]);
    this.queryModel = this.queryModel
      .find(filteringQuery);
    return this;
  }

  // define sorting method
  sort() {
    const sortValue = this?.query?.sort || '-createdAt';
    this.queryModel = this.queryModel.sort(sortValue);
    return this;
  }

  // define pagination
  pagination() {
    const limit = Number(this?.query?.limit) || 20;
    const page = Number(this?.query?.page) || 1;
    const skip = (page - 1) * limit;
    this.queryModel = this.queryModel.skip(skip).limit(limit);
    return this;
  }

  // define filed limiting
  fieldsLimiting() {
    const fields =
      (this?.query?.fields as string)?.split(',')?.join(' ') || '--v';
    this.queryModel = this.queryModel.select(fields);
    return this;
  }
}

// export this class
export default QueryBuilder;
