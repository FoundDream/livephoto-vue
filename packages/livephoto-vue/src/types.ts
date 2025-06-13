export interface LivePhotoProps {
  /**
   * 照片资源URL
   */
  photoSrc?: string
  
  /**
   * 视频资源URL
   */
  videoSrc?: string
  
  /**
   * 是否静音播放
   * @default false
   */
  muted?: boolean
  
  /**
   * 是否循环播放
   * @default false
   */
  loop?: boolean
  
  /**
   * 是否使用Apple官方模式
   * @default false
   */
  useApple?: boolean
} 