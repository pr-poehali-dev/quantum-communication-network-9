import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет уведомление о новом заказе на почту владельца SwypeCore"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    contact = body.get('contact', '').strip()
    service = body.get('service', '').strip()
    message = body.get('message', '').strip()

    if not name or not contact or not message:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Zapolnite vse obyazatelnye polya'})
        }

    smtp_password = os.environ['SMTP_PASSWORD']
    sender = 'maksswype57@gmail.com'
    recipient = 'maksswype57@gmail.com'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'🎮 Новый заказ SwypeCore от {name}'
    msg['From'] = sender
    msg['To'] = recipient

    html = f"""
    <html>
    <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <div style="background: #7A7FEE; padding: 24px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">SwypeCore — Новый заказ!</h1>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; width: 140px;">Имя</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #222;">{name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888;">Контакт</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #222;">{contact}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888;">Услуга</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #222;">{service if service else 'Не указана'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; vertical-align: top;">Сообщение</td>
              <td style="padding: 10px 0; color: #222;">{message}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 16px 24px; background: #f9f9f9; text-align: center; color: #aaa; font-size: 13px;">
          SwypeCore — CS:S серверы и сайты
        </div>
      </div>
    </body>
    </html>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(sender, smtp_password)
        server.sendmail(sender, recipient, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'message': 'Заявка отправлена!'})
    }