import fly from './fly'
import Response from 'model/Response'
import Config from '@/config'

export default class AposApi {
  /**
   * 测试写法，可指定模型
   *
   */
  static test(body: any): Promise<Response<any>> {
    return fly.post(`apos/app/v1/${Config.tenant}/apos/coupon/batch/acquire`, body, {}).then(res => {
      return res.data
    })
  }
}
