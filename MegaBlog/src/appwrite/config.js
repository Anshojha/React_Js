import { deflate } from "zlib";
import { Client, Account, ID, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
    this.account = new Storag(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite config  :: cretePost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        sluf,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite config  updatePost :: error", error);
    }
  }

  async deletePot({ slug }) {
    try {
      await this.databases.deleteDocumet(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite config  updatePost :: error", error);
      return false;
    }
  }

  async getPost({ slug }) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite config  getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite config  getPosts :: error", error);
      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        flie
      );
    } catch (error) {
      console.log("Appwrite config  uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile({ fileId }) {
    try {
      return await this.bucket.deleteFile(conf.appWriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite config  uploadFile :: error", error);
      return false;
    }
  }

  getFilePrview(fileId) {
    return this.bucket.getFilePreview
  }
}

const service = new Service();
export default Service;
