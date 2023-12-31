import { Storage } from '@google-cloud/storage'
import { HttpException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Prisma } from '@prisma/client'
@Injectable()
export class StorageService {
  private storage: Storage
  private bucket: string

  constructor(private readonly configService: ConfigService) {
    this.storage = new Storage({
      projectId: this.configService.get<string>('PROJECT_ID'),
      // credentials: {
      //   client_email: this.configService.get<string>('CLIENT_EMAIL'),
      //   private_key: this.configService.get<string>('PRIVATE_KEY'),
      // },
    })

    this.bucket = this.configService.get<string>('STORAGE_MEDIA_BUCKET')!
  }

  async save(
    directory: string,
    file: Express.Multer.File,
  ): Promise<Prisma.FileCreateInput> {
    if (!file)
      throw new HttpException('Terdapat kesalahan ketika membaca file', 400)
    const path = this.generatePath(directory, file)
    const uploadedFile = this.storage.bucket(this.bucket).file(path)
    const stream = uploadedFile.createWriteStream()
    stream.end(file.buffer)
    return {
      name: file.originalname,
      url: `https://storage.googleapis.com/${this.bucket}/${path}`,
    }
  }

  async removeFileIfExists(path: string) {
    if (path) {
      await this.storage
        .bucket(this.bucket)
        .file(path)
        .delete({ ignoreNotFound: true })
    }
  }

  generatePath(directory: string, file: Express.Multer.File): string {
    const randomName = Array(32)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('')
    return `${directory}${randomName}.${file.mimetype.split('/')[1]}`
  }

  getFilenameFromPath(path: string): string {
    if (path)
      return path.split(`https://storage.googleapis.com/${this.bucket}/`)[1]
    return ''
  }
}
